export const STATIONS = [
  {
    slug: 'termini', name: 'Termini',
    x: 218, y: 159,
  },
  {
    slug: 'colosseo', name: 'Colosseo',
    x: 206, y: 199,
  },
  {
    slug: 'spagna', name: 'Spagna',
    x: 174, y: 143,
  },
  {
    slug: 'venezia', name: 'Venezia',
    x: 174, y: 179,
  },
  {
    slug: 'ottaviano', name: 'Ottaviano',
    x: 118, y: 127,
  },
  {
    slug: 'clodio-mazzini', name: 'Clodio-Mazzini',
    x: 118, y: 95,
  },
  {
    slug: 'cipro', name: 'Cipro',
    x: 80, y: 131,
  },
  {
    slug: 'battistini', name: 'Battistini',
    x: 16, y: 135,
  },
  {
    slug: 'san-pietro', name: 'San Pietro',
    x: 110, y: 171,
  },
];

export const ROUTES = [
  {
    start: 'venezia', end: 'colosseo',
    type: 'green', parts: 1,
  },
  {
    start: 'termini', end: 'colosseo',
    type: 'blue', parts: 2,
    displace: {
      x1: -3.5, y1: -3.5,
      x2: -3.5, y2: 2,
    },
  },
  {
    start: 'termini', end: 'colosseo',
    type: 'wild', parts: 2,
    displace: {
      x1: 3.5, y1: -2,
      x2: 3.5, y2: 3.5,
    },
  },
  {
    start: 'termini', end: 'spagna',
    type: 'red', parts: 2,
    qx: 204, qy: 146,
  },
  {
    start: 'venezia', end: 'spagna',
    type: 'orange', parts: 1,
  },
  {
    start: 'spagna', end: 'ottaviano',
    type: 'wild', parts: 3,
    qx: 159, qy: 123,
    displace: {
      x1: 5, y1: 0,
      x2: -3.5, y2: -3.5,
      qx: 5, qy: -3,
    },
  },
  {
    start: 'spagna', end: 'ottaviano',
    type: 'red', parts: 3,
    qx: 159, qy: 123,
    displace: {
      x1: 0, y1: 6,
      x2: -3.5, y2: 3.5,
      qx: 4, qy: 4,
    },
  },
  {
    start: 'cipro', end: 'ottaviano',
    type: 'black', parts: 1,
  },
  {
    start: 'cipro', end: 'battistini',
    type: 'red', parts: 4,
    qx: 51, qy: 159,
  },
  {
    start: 'clodio-mazzini', end: 'ottaviano',
    type: 'purple', parts: 1,
  },
  {
    start: 'ottaviano', end: 'san-pietro',
    type: 'white', parts: 2,
  },
  {
    start: 'venezia', end: 'san-pietro',
    type: 'yellow', parts: 3,
    qx: 144, qy: 166,
  },
];