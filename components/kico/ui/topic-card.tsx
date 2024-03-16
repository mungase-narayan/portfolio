import React from "react";
import { DotEffect } from "@/components/kico/effects/dot-effect";
import { ButtonLink } from "./button-link";

type TopicCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonTitle: string;
  buttonHref: string;
};

export const TopicCard = ({
  icon,
  title,
  description,
  buttonTitle,
  buttonHref,
}: TopicCardProps) => {
  return (
    <div className="max-w-[350px] glass-effect">
      <div className="flex items-center justify-center">
        <div className="glass-effect w-full p-8 flex items-center justify-center">
          <DotEffect />
          {icon}
        </div>
      </div>
      <h6 className="h6 text-foreground py-4">{title}</h6>
      <p className="text-foreground text-sm font-thin pb-6">{description}</p>

      <ButtonLink buttonTitle={buttonTitle} buttonHref={buttonHref} />
    </div>
  );
};
