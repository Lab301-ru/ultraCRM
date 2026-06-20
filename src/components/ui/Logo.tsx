import Image from "next/image";

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/Logo.png"
      alt="UltraCRM — CRM для сервисных центров"
      width={465}
      height={90}
      priority={priority}
      className={`h-8 w-auto ${className}`}
    />
  );
}
