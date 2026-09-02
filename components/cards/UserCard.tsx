import Link from "next/link";

import UserAvatar from "../UserAvatar";
import ROUTES from "@/constants/routes";

const UserCard = ({ _id, name, image, username }: User) => {
  return (
    <div className="shadow-light100_darknone w-full xs:w-57.5">
      <article className="w-full flex flex-col items-center justify-center background-light900_dark200 border light-border rounded-2xl p-8">
        <UserAvatar
          id={_id}
          name={name}
          imageUrl={image}
          className="size-25 rounded-full object-cover"
          fallbackClassName="text-3xl tracking-widest"
        />

        <Link href={ROUTES.PROFILE(_id)}>
          <div className="mt-4 text-center">
            <h3 className="h3-bold text-dark200_light900 line-clamp-1">
              {name}
            </h3>
            <p className="body-regular text-dark500_light500 mt-2">
              @{username}
            </p>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default UserCard;
