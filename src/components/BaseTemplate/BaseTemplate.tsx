import { FC, memo } from "react";
import styles from "./BaseTemplate.module.scss";

export interface IBaseTemplateProps {
  className?: string;
  sampleTextProp: string;
}

const BaseTemplate: FC<IBaseTemplateProps> = ({ className, sampleTextProp }) => {
  return (
    <div
      className={[styles.container, className ? className : ""].join(" ")}
      data-testid="BaseTemplate"
    >
      {sampleTextProp}
    </div>
  );
};

export default memo(BaseTemplate);
