import StronniczyLogo from "@images/logo.svg";
import {
  Box,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  Paper,
  Transition,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import Link from "next/link";
import React, { FC, useState } from "react";
import ColorThemeToggle from "../ColorThemeToggle";
import { HEADER_HEIGHT, useStyles } from "./Header.styles";

type HeaderResponsiveProps = {
  links: { link: string; label: string }[];
};

const Header: FC<HeaderResponsiveProps> = ({ links }) => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} passHref>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: active === link.link,
        })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          toggleOpened(false);
        }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <MantineHeader
      height={HEADER_HEIGHT}
      mb={"xl"}
      py={"xs"}
      className={classes.root}
    >
      <Container className={classes.header}>
        <img
          src={StronniczyLogo}
          alt="Służba Stronniczy"
          height={80}
          width={216}
        />
        <Group spacing={5} className={classes.links}>
          {items}
          <Box ml={"xs"}>
            <ColorThemeToggle />
          </Box>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
};

export default Header;
