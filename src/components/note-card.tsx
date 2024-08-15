import { BiPencil, BiTrash } from "react-icons/bi";
import IconButton from "./icon-button";

export default function NoteCard({
  title,
  description,
  onDelete,
  onEdit,
}: NoteCardProps) {
  return (
    <section className="border-box-border border rounded-2xl p-4 flex flex-col gap-2 group">
      <header className="flex justify-between">
        <h3 className="text-lg">{title}</h3>
        <div className="flex gap-2 group-hover:opacity-100 opacity-0 transition-opacity">
          <IconButton onclick={onEdit}>
            <BiPencil />
          </IconButton>
          <IconButton onclick={onDelete}>
            <BiTrash />
          </IconButton>
        </div>
      </header>
      <p className="text-sm text-gray-400">{description}</p>
    </section>
  );
}

type NoteCardProps = {
  title: string;
  description: string;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  onEdit?: React.MouseEventHandler<HTMLButtonElement>;
};
