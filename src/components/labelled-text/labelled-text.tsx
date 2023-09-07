import { Stack, styled, Typography } from "@mui/material";
import { ILabelledTextProps } from "../../types/labelledTestProps";

const Label = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: "raleway";
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

export function LabelledText({
  id,
  label,
  text,
  icon = null,
}: ILabelledTextProps) {
  return (
    <Stack id={id}>
      <Label id={`${id}-label`} variant="caption">
        {label}
      </Label>

      <Text
        id={`${id}-text`}
        variant="body1"
        display={"flex"}
        alignItems={"flex-start"}
      >
        {icon && icon}
        {text}
      </Text>
    </Stack>
  );
}

export default LabelledText;
