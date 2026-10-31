
import React, { lazy, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = (
  <div style={{ background: "#ddd", width: 24, height: 24 }} />
);

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const icons = Object.fromEntries(
  Object.entries(dynamicIconImports).map(([name, importIcon]) => [
    name,
    lazy(importIcon),
  ]),
);

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name] as React.LazyExoticComponent<
    React.ComponentType<LucideProps>
  >;

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
