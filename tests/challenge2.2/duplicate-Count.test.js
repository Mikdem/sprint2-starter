/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane Abraham', new Date(2010, 1, 1));
const c2 = new Candidate('Birhane Abrham', new Date(2010, 1, 5));
const c3 = new Candidate('Alemayehu Worku', new Date(2010, 4, 5));
const c4 = new Candidate('Abrham Berhane', new Date(2010, 5, 6));
const c5 = new Candidate('Hailu Abrham', new Date(2010, 10, 7));
const c6 = new Candidate('T/Mariam Asnake', new Date(2010, 3, 5));
const c7 = new Candidate('T/Mariam Asnake', new Date(2010, 4, 9));
const c8 = new Candidate('Ashenafi Ayele', new Date(2010, 1, 5));
const c9 = new Candidate('Ashenefi Ayele', new Date(2010, 1, 5));

test('duplicate Count test', () => {
  expect(
    Utils.duplicateCount([c1, c2, c3, c4])).toEqual(1);
});

test('duplicate Count test', () => {
  expect(Utils.duplicateCount([c2, c3, c4, c5, c6, c7])).toEqual(0);
});

test('duplicate Count test', () => {
    expect(Utils.duplicateCount([c1, c2, c3, c4, c5, c6, c7, c8, c9])).toEqual(2);
});

// test('duplicate Count test', () => {
//     expect(Utils.duplicateCount([c2, c3, c4, c5, c6, c7, c8, c9])).toEqual([c2]);
// });

// test('duplicate Count test', () => {
//     expect(Utils.duplicateCount([c2, c3, c4, c5, c6, c7, c8, c9])).toEqual([c2]);
// });
