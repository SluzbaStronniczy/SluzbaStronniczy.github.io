import { Group, Switch, useMantineColorScheme } from "@mantine/core";
import { FiMoon, FiSun } from "react-icons/fi";
import { useStyles } from "./ColorThemeToggle.styles";

const SwitchToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();

  return (
    <Group position="center" my={30}>
      <div className={classes.root}>
        <FiSun className={cx(classes.icon, classes.iconLight)} size={18} />
        <FiMoon className={cx(classes.icon, classes.iconDark)} size={18} />
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          size="md"
        />
      </div>
    </Group>
  );
};

export default SwitchToggle;
