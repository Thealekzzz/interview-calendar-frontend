export const baseTheme = {
  colors: {
    primary: '#f13939',
    accent: '#3355DD',
    task: '#4488aa',
    border: '#eaeaea',

    text: '#2d2d2d',
    textMinor: '#cdcdcd',

    lines: '#efefef',
    bg: '#fafafa',
  },

  media: {
    medium: '(max-width: 740px)',
    small: '(max-width: 540px)',
  },

  sizes: {
    calendar: 740,
    hourHeight: 60,

    header: {
      height: {
        default: 100,
        small: 60,
      }
    },
    
    tooltip: {
      height: 80,
      width: 200,
    },
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