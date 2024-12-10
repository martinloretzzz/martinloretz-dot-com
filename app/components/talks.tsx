import Image from "next/image";
import { FC } from "react";
import { LinkIcon } from "./icons";

interface TalkProps {
  name: string;
  location?: string;
  link?: string;
  image: string;
  imageSource?: string;
}

export const Talk: FC<TalkProps> = ({ name, location, link, image, imageSource }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden bg-zinc-900 shadow-zinc-700 shadow-md">
      <a href={link} target="_blank">
        <Image className="w-full object-cover" src={image} width={1024} height={576} alt={name} />
      </a>
      {imageSource ? (
        <div className="text-xs text-gray-600 text-right pr-2 h-2">© {imageSource}</div>
      ) : (
        <div className="h-2" />
      )}
      <div className={`px-6 pb-4`}>
        <div className="flex flex-row">
          <div>
            <div className="font-bold text-xl mb-2">{name}</div>
            {location && <div className="text-sm text-gray-400">@ {location}</div>}
          </div>
          {link && (
            <a href={link} target="_blank" className="pl-2">
              <LinkIcon size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
