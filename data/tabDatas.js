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
          line4: 5
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
          line1: 0,
          line4: 3,
          capo: 0,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 2
        },
        b2g3: {
          line2: 1
        },
        b3g3: {
          line1: 0
        },
        b4g1: {
          line2: 1
        },
        b4g3: {
          line3: 2
        }
      },
      {
        b1g1: {
          line2: 0,
          line3: 0,
          line5: 2,
        },
        b1g3: {
          line2: 1,
          line3: 2,
          line5: 0,
        },
        b2g1: {
          line2: 1,
          line3: 2,
          line5: 0,
        },
        b3g1: {
          line3: 2,
          line5: 0,
        },
        b4g1: {
          line5: 8
        },
        b4g3: {
          line5: 7
        }
      },
      {
        b1g1: {
          line5: 0,
          capo: 5
        },
        b1g3: {
          line4: 7
        },
        b2g1: {
          line3: 5
        },
        b2g3: {
          line2: 5
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
          line4: 5
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
          line1: 0,
          line4: 3,
          capo: 0,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 2
        },
        b2g3: {
          line2: 1
        },
        b3g3: {
          line1: 0
        },
        b4g1: {
          line2: 1
        },
        b4g3: {
          line3: 2
        }
      },
      {
        b1g1: {
          line2: 0,
          line3: 0,
          line5: 2,
        },
        b1g3: {
          line2: 1,
          line3: 2,
          line5: 0,
        },
        b2g1: {
          line2: 1,
          line3: 2,
          line5: 0,
        },
        b4g1: {
          line5: 0
        },
        b4g3: {
          line5: 2
        }
      },
      {
        b1g1: {
          line5: 3
        },
        b1g3: {
          line4: 2
        },
        b2g1: {
          line3: 0
        },
        b2g3: {
          line1: 0
        },
        b3g1: {
          line1: 2,
          line4: 0
        },
        b3g3: {
          line2: 3
        },
        b4g1: {
          line3: 2
        },
        b4g3: {
          line1: 2
        }
      },
      {
        b1g1: {
          line1: 0,
          line4: 3,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 2
        },
        b2g3: {
          line1: 0
        },
        b3g1: {
          line2: 1,
          line5: 0
        },
        b3g3: {
          line3: 2
        },
        b4g1: {
          line5: 0
        },
        b4g3: {
          line5: 2
        }
      },
      {
        b1g1: {
          line2: 1,
          line5: 3,
        },
        b1g3: {
          line3: 0
        },
        b2g1: {
          line4: 2
        },
        b2g3: {
          line2: 1
        },
        b3g1: {
          line1: 3,
          line6: 3
        },
        b3g3: {
          line2: 0
        },
        b4g1: {
          line3: 0
        },
        b4g3: {
          line1: 3
        }
      },
      {
        b1g1: {
          line1: 3,
          line4: 0
        },
        b1g3: {
          line1: 2,
          line2: 3,
          line3: 2,
          line4: 0
        },
        b2g1: {
          line1: 2,
          line2: 3,
          line3: 2,
          line4: 0
        },
        b4g1: {
          line5: 0
        },
        b4g3: {
          line5: 2
        }
      },
      {
        b1g1: {
          line5: 3
        },
        b1g3: {
          line4: 2
        },
        b2g1: {
          line3: 0
        },
        b2g3: {
          line2: 1
        },
        b3g1: {
          line1: 2,
          line4: 0
        },
        b3g3: {
          line2: 3
        },
        b4g1: {
          line3: 2
        },
        b4g3: {
          line1: 2
        }
      },
      {
        b1g1: {
          line1: 0,
          line4: 3,
        },
        b1g3: {
          line2: 1
        },
        b2g1: {
          line3: 2
        },
        b2g3: {
          line1: 0
        },
        b3g1: {
          line2: 1,
          line5: 0
        },
        b3g3: {
          line3: 2
        },
        b4g1: {
          line5: 0
        },
        b4g3: {
          line5: 2
        }
      },
      {
        b1g1: {
          line5: 3,
        },
        b1g3: {
          line4: 2
        },
        b2g1: {
          line3: 0
        },
        b2g3: {
          line2: 1
        },
        b3g1: {
          line4: 0
        },
        b3g3: {
          line3: 2
        },
        b4g1: {
          line2: 3
        },
        b4g3: {
          line1: 2
        }
      },
      {
        b1g1: {
          line1: 0,
          line2: 1,
          line3: 2,
          line4: 3
        },
        b1g3: {
          line1: 0,
          line2: 1,
          line3: 2,
          line4: 3
        },
        b2g1: {
          line1: 0,
          line2: 1,
          line3: 2,
          line4: 3
        }
      },
    ]
  }
];

export default tabDatas;