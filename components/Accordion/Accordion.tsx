import React, { FC, useState, MouseEvent, useRef } from "react";
import { IconActionAccordion } from "../Icons";
import { StyledAccordionHead } from "./AccordionHead";
import {
  StyledAccordion,
  AccordionBodyWrapper,
  AccordionTitleWrapper,
  InnerContentWrapper,
} from "./Accordion.styles";
import { AccordionProps } from "./types";
import { getHeightOfInnerContent } from "./utils";

const accordionAnimationTime = 1000;

const Accordion: FC<AccordionProps> = ({
  title = null,
  isExpanded,
  children,
  isBoldTitle,
  headerIcon,
  headerComponent,
  isMdxMode = false,
  ...props
}) => {
  const [isOpen, setOpen] = useState<boolean>(isExpanded ?? false);
  const [accordionOverflow, setAccordionOverflow] = useState<string>(
    isOpen ? "unset" : "hidden"
  );
  const [accordionHeight, setAccordionHeight] = useState<string>(
    isOpen ? "auto" : "0"
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const bodyElement = useRef(null);

  const disableAccordionButton = () => {
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, accordionAnimationTime);
  };

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isOpen) {
      setAccordionOverflow("hidden");
      disableAccordionButton();
      setAccordionHeight(
        getHeightOfInnerContent(bodyElement.current).toString()
      );
      setTimeout(() => {
        setAccordionHeight("0");
      }, 0);
    } else {
      setAccordionHeight(
        getHeightOfInnerContent(bodyElement.current).toString()
      );
      disableAccordionButton();
      setTimeout(() => {
        setAccordionHeight("auto");
        setAccordionOverflow("unset");
      }, accordionAnimationTime);
    }
    setOpen(!isOpen);
  };

  if (title) {
    return (
      <StyledAccordion {...props} isMdxMode={isMdxMode}>
        <StyledAccordionHead
          onClick={onClickHandler}
          isOpen={isOpen}
          isBoldTitle={isBoldTitle}
          hasTitle
          disabled={isButtonDisabled}
          aria-controls={String(title)}
          isMdxMode={isMdxMode}
        >
          <AccordionTitleWrapper>
            {headerIcon || null}
            <div>
              <mark>{title}</mark>
            </div>
          </AccordionTitleWrapper>
          <IconActionAccordion width={12} height={8} />
        </StyledAccordionHead>
        <AccordionBodyWrapper
          height={accordionHeight}
          overflow={accordionOverflow}
        >
          <InnerContentWrapper
            ref={bodyElement}
            isMdxMode={isMdxMode}
            aria-labelledby={String(title)}
          >
            {children}
          </InnerContentWrapper>
        </AccordionBodyWrapper>
      </StyledAccordion>
    );
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    const newProps = {
      isOpen,
      setOpen,
    };

    if (React.isValidElement(child)) {
      return React.cloneElement(child, newProps);
    }

    return child;
  });

  return <StyledAccordion {...props}>{childrenWithProps}</StyledAccordion>;
};

export const MDXAccordion: FC<AccordionProps> = (props) => (
  <Accordion {...props} isMdxMode />
);

export default Accordion;
