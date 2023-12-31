// eslint-disable-next-line no-unused-vars
import { Candidate, Job } from '../common/model.js';

/**
 * Part 3: Job matching
 * ------------------------------------------
 *
 */

/**
 * This function returns true only if the candidateSkill is a match
 * for the job skill:
 * - the names are identical, regardless of case
 * - the candidate's skill level is higher or equal to the job skill level
 *
 *
 * @param {Skill} candidateSkill
 * @param {Skill} jobSkill
 */
const skillsMatch = (candidateSkill, jobSkill) => {
  // ----- Challenge 2.3.1 - Complete the function here ---- //
  if(candidateSkill.name.toUpperCase() === jobSkill.name.toUpperCase() && candidateSkill.level >= jobSkill.level){
    return true;
  }else
    return false;
};

/**
 * Returns true if the candidate meets the gender requirements
 * of the given job. If the job has no gender requirements, all candidates
 * are suitable.
 *
 * @param {Candidate} candidate
 * @param {Job} job
 */
const suitableGender = (candidate, job) => {
  // ----- Challenge 2.3.2 - Complete the function here ---- //
  if (candidate.gender === job.requiredGender || job.requiredGender == undefined){
    return true;
  }else
  return false;
};

/**
 *
 * This function returns a number between 0 and 100 indicating the suitability
 * of the candidate for the given job. Rules are as follows:
 * - 20% of the score is allocated for gender suitablity.
 * - 80% is reserved for matching skills. A candidate who has all the skills required by the job will
 * get 80%.
 * The result will be rounded to the closest whole number.
 *
 * @param {String} name
 * @returns String
 */
const suitabilityScore = (candidate, job) => {
  // ----- Challenge 2.3.3 - Complete the function here ---- //
  let genderScore = 0;
  let skillScore = 0;
  let numberOfSkill = 0;
  let score = 0;
  if(suitableGender(candidate, job) === true){
    genderScore +=20;
  }
  for(let i=0; i<job.requiredSkills.length; i++){
    for(let j=0; j<candidate.skills.length; j++){
      if(skillsMatch(candidate.skills[j], job.requiredSkills[i]) === true){
        numberOfSkill += 1;
      }
    };
  };
  skillScore = Math.round(numberOfSkill/job.requiredSkills.length*80);
  score = genderScore + skillScore;
  return score;
};

/**
 * The 'hotness' of a candidate is defined by the number of jobs
 * for which their suitability score is greater than 80.
 * This function returns the highest 'hotness' score from the candidates list
 * and the provided jobs list.
 *
 * @param {Array<Candidate>} candidates
 * @param {Array<Job>} jobs
 * @returns number
 */
const hottestCandidate = (candidates, jobs) => {
  // ----- Challenge 2.3.4 - Complete the function here ---- //
  const hotCandidate = []  
  for (const candidate of candidates) {
    let hotness = 0;
    for (const job of jobs) {
      const hot = suitabilityScore(candidate, job);      
        if(hot > 80){   
          hotness++   
       }
      }
      hotCandidate.push(hotness)
    }
  const hottest = Math.max(...hotCandidate);
  return hottest;
};

export { skillsMatch, suitableGender, suitabilityScore, hottestCandidate };
