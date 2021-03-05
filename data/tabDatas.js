const tabDatas = [
  {
    id: 1,
    title: 'stairway to heaven',
    artist: 'eagles',
    timeSignature: '4/4',
    bars: [
      {
        b1g1: {
          line4: 7,
          capo: 5,
        },
        b1g3: {
          line3: 5
        },
        b2g1: {
          line2: 5
        },
        b2g3: {
          line1: 5
        },
        b3g1: {
          line1: 7,
          line4: 6
        },
        b3g3: {
          line2: 5
        },
        b4g1: {
          line3: 5
        },
        b4g3: {
          line1: 7
        }
      },
      {
        b1g1: {
          line1: 8,
          line4: 5,
          capo: 5,
        },
        b1g3: {
          line2: 5
        },
        b2g1: {
          line3: 5
        },
        b2g3: {
          line1: 8
        },
        b3g1: {
          line1: 2,
          line4: 4,
          capo: 2,
        },
        b3g3: {
          line2: 3
        },
        b4g1: {
          line4: 2
        },
        b4g3: {
          line1: 2
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
      {
        b1g1: {
          line1: 1,
          line4: 1,
          capo: 5,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 1
        },
        b2g3: {
          line1: 1
        },
        b3g1: {
          line1: 1,
          line4: 1,
          capo: 1,
        },
        b3g3: {
          line2: 1
        },
        b4g1: {
          line4: 1
        },
        b4g3: {
          line1: 1
        }
      },
    ]
  }
];

export default tabDatas;