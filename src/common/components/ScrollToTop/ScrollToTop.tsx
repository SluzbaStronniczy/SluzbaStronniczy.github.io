import {
  ActionIcon,
  Affix,
  Box,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useBooleanToggle, useWindowScroll } from "@mantine/hooks";
import { FC, memo, RefObject, useEffect, useRef } from "react";
import { VscArrowUp } from "react-icons/vsc";

type TopAnchorProps = {
  anchorRef?: RefObject<HTMLDivElement>;
};

type ScrollToTopProps = {
  topOffset?: number;
};

const BUTTON_APPEAR_DEFAULT_OFFSET: number = 500;

const TopAnchor: FC<TopAnchorProps> = ({ anchorRef }) => (
  <Box
    ref={anchorRef}
    id="anchor-top"
    sx={() => ({
      marginTop: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      pointerEvents: "none",
    })}
  />
);

const ScrollToTop: FC<ScrollToTopProps> = ({
  topOffset = BUTTON_APPEAR_DEFAULT_OFFSET,
}) => {
  const theme = useMantineTheme();
  const [, scrollTo] = useWindowScroll();
  const [visible, toggleVisibility] = useBooleanToggle(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = anchorRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          toggleVisibility(!entry.isIntersecting);
        });
      },
      {
        rootMargin: `${topOffset}px 0px 0px 0px`,
      }
    );

    if (target) {
      observer.observe(target);
    }
  }, [anchorRef.current]);

  const handleClick = () => {
    scrollTo({ y: 0 });
  };

  return (
    <>
      <TopAnchor anchorRef={anchorRef} />
      <Affix position={{ bottom: 24, right: 24 }}>
        <Transition
          duration={400}
          mounted={visible}
          transition="pop-bottom-right"
        >
          {(transitionStyles) => (
            <ActionIcon
              style={transitionStyles}
              size={48}
              radius={48}
              variant="filled"
              color={theme.primaryColor}
              onClick={handleClick}
              aria-label="Przewiń na początek strony"
            >
              <VscArrowUp size={18} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default memo(ScrollToTop);
