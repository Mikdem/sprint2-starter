/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job } from '../../common/model';
import { Skill } from '../../common/model';

const j1 = new Job('job1', '', [new Skill('s6', 0), new Skill('s5', 2), new Skill('s1', 2)], undefined, new Date(2023, 1, 1));
const j2 = new Job('job2', '', [new Skill('s3', 0), new Skill('s2', 2)], undefined, new Date(2023, 2, 1));
const j3 = new Job('job3', '', [new Skill('s3', 0), new Skill('s4', 2), new Skill('s5', 2)], undefined, new Date(2023, 3, 1));
const j4 = new Job('job4', '', [new Skill('s3', 0), new Skill('s4', 2), new Skill('s1', 2)], undefined, new Date(2023, 1, 1));
const j5 = new Job('job5', '', [new Skill('s3', 0), new Skill('s2', 2), new Skill('s5', 2)], undefined, new Date(2023, 2, 1));
const j6 = new Job('job6', '', [new Skill('s3', 0), new Skill('s4', 2), new Skill('s1', 2)], undefined, new Date(2023, 3, 1));



test('Most-In-Demand-Skill-Test', () => {
  expect(Utils.mostInDemandSkill([j1, j2, j3, j4, j5]))
    .toEqual(['s3'])
});

test('Most-In-Demand-Skill-Test', () => {
  expect(Utils.mostInDemandSkill([j1, j2, j3]))
    .toEqual(['s3', 's5'])
});

test('Most-In-Demand-Skill-Test', () => {
  expect(Utils.mostInDemandSkill([j1, j4, j6]))
    .toEqual(['s1'])
});
