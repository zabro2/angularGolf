export interface Player {
  name: string;
  scores: [
    { hole1: 0 },
    { hole2: 0 },
    { hole3: 0 },
    { hole4: 0 },
    { hole5: 0 },
    { hole6: 0 },
    { hole7: 0 },
    { hole8: 0 },
    { hole9: 0 },
    { hole10: 0 },
    { hole11: 0 },
    { hole12: 0 },
    { hole13: 0 },
    { hole14: 0 },
    { hole15: 0 },
    { hole16: 0 },
    { hole17: 0 },
    { hole18: 0 }
  ];
  totals: [
    { out: number },
    { in: number },
    { total: number }
  ];
}
