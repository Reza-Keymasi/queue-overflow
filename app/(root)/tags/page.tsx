import { getTags } from "@/lib/actions/tag.actions";

const Tags = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    query: "",
  });

  const tags = data || {};

  return <div>Tags</div>;
};

export default Tags;
