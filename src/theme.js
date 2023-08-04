export const baseTheme = {
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    bg: '#E5E4E8',
    font: '#19191B',
  },

  media: {
    medium: '(max-width: 740px)',
    small: '(max-width: 540px)',
  },

  sizes: {
    calendar: 740,
    header: { height: 80 },
    tooltip: { height: 80, width: 200 },
    modal: { width: 540 },
    hourHeight: 60,
  },

  transitions: {
    bgc: 'background-color .2s ease-in-out',
    opacity: 'opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1)',
    visibility: 'visibility .3s cubic-bezier(0.075, 0.82, 0.165, 1)',
    transform: 'transform .3s cubic-bezier(0.075, 0.82, 0.165, 1)',
  },

  order: {
    task: 10,
    header: 50,
    modal: 100,
  },
}