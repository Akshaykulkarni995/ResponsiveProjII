import { useTranslation } from 'react-i18next'
import { IconButton, IconButtonProps, Tooltip, styled } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export interface ExpandButtonProps extends IconButtonProps {
  expanded: boolean
  hidden?: boolean
}

const Container = styled(Tooltip, { shouldForwardProp: prop => prop !== 'hidden'})<{ hidden?: boolean }>`
  visibility: ${({ hidden }) => hidden ? 'hidden' : 'visible'};
`

const ExpandIcon = styled(FontAwesomeIcon, { shouldForwardProp: prop => prop !== 'expanded' })<{ expanded: boolean }>`
  transform: ${({ expanded }) => expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: ${({ theme }) => theme.transitions.create('transform', { duration: theme.transitions.duration.shortest })};
`

export function ExpandButton({ expanded, id, hidden, onClick, size = "large" }: ExpandButtonProps) {
  const { t } = useTranslation()

  return (
    <Container
      id={`${id}-tooltip`}
      hidden={hidden}
      placement="bottom-end"
      title={
        expanded
          ? t("expandButton.showLess", "Show less")
          : t("expandButton.showMore", "Show more")
      }
    >
      <IconButton
        id={`${id}-expandbutton`}
        color="inherit"
        edge="start"
        onClick={onClick}
        size={size}
      >
        <ExpandIcon
          id={`${id}-expandbuttonicon`}
          expanded={expanded}
          fixedWidth
          icon={faCaretDown}
        />
      </IconButton>
    </Container>
  );
}

export default ExpandButton;
