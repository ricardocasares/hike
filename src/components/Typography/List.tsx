import { styled } from "@/css";

export const UnstyledList = styled('ul', { margin: "0", padding: "0", listStyle: "none" });

export const HorizontalList = styled(UnstyledList, {
  li: {
    display: "inline-block",
    marginRight: "10px",
  },

  "li:last-child": {
    marginRight: 0
  }
});

export const NavList = styled(HorizontalList, {
  a: {
    color: "$fg",
    textDecoration: "none",
    textTransform: "lowercase",
    fontSize: "$4",

    "&:focus, &:hover": {
      color: "$accent"
    }
  }
});
