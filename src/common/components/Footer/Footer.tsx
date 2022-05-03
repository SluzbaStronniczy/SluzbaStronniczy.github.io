import StronniczyLogo from "@images/logo.svg";
import { Container, Group, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";
import { useStyles } from "./Footer.styles";

type FooterLinksProps = {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
};

const Footer: FC<FooterLinksProps> = ({ data }) => {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link href={link.link} key={index} passHref>
        <Text<"a">
          className={classes.link}
          component="a"
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Text>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <img
            src={StronniczyLogo}
            alt="Służba Stronniczy"
            width={270}
            height={100}
          />
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group
          spacing={0}
          className={classes.social}
          position="right"
          noWrap
        ></Group>
      </Container>
    </footer>
  );
};

export default Footer;
