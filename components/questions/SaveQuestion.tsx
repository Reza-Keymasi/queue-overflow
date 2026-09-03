"use client";

import Image from "next/image";
import { use, useOptimistic, useTransition } from "react";
import { useSession } from "next-auth/react";

import { toggleSaveQuestion } from "@/lib/actions/collection.actions";
import { toast } from "sonner";

interface SaveQuestionProps {
  questionId: string;
  hasSavedQuestionPromise: Promise<ActionResponse<{ saved: boolean }>>;
}

const SaveQuestion = ({
  questionId,
  hasSavedQuestionPromise,
}: SaveQuestionProps) => {
  const session = useSession();
  const userId = session.data?.user?.id;

  const { data } = use(hasSavedQuestionPromise);
  const { saved: hasSaved = false } = data || {};

  const [optimisticSaved, setOptimisticSaved] = useOptimistic(
    hasSaved,
    (_, newSaved: boolean) => newSaved
  );

  const [isSaving, startTransition] = useTransition();

  const handleSave = async () => {
    if (isSaving) return;

    if (!userId)
      return toast.error("You need to be logged in to save a question");

    const nextSaved = !optimisticSaved;

    startTransition(async () => {
      setOptimisticSaved(nextSaved);

      try {
        const { success, data, error } = await toggleSaveQuestion({
          questionId,
        });

        if (!success) throw new Error(error?.message || "An error occurred");

        toast.success(
          `Question ${data?.saved ? "saved" : "unsaved"} successfully`
        );
      } catch (error) {
        toast.error("Error", {
          description:
            error instanceof Error ? error.message : "An error occured",
        });
      }
    });
  };

  return (
    <Image
      src={optimisticSaved ? "/icons/star-filled.svg" : "/icons/star-red.svg"}
      width={18}
      height={18}
      alt="save"
      className={`cursor-pointer ${isSaving && "opacity-50"}`}
      aria-label="Save question"
      onClick={handleSave}
    />
  );
};

export default SaveQuestion;
