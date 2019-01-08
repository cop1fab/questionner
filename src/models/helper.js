import models from './data';

const {
  Meetup,
  Question,
  User,
  Rsvp,
} = models;

class dataStructure {
  constructor() {
    this.meetups = [];
    this.questions = [];
    this.users = [];
    this.rsvps = [];
  }

  createMeetup({ ...meetupData
  }) {
    const existingMeetup = this.meetups.length;
    const id = existingMeetup ? this.meetups[existingMeetup - 1].id + 1 : 1;
    const createdMeetup = new Meetup({ ...meetupDetails,
      id
    });
    this.meetups.push(createdMeetup);
    return createdMeetup;
  }

  meetUpParId(meetupId) {
    let singleMeetup;
    for (const tempMeetup of this.meetups) {
      if (tempMeetup.id === meetupId) {
        singleMeetup = tempMeetup;
        break;
      }
    }
    return singleMeetup || null;
  }

  filterMeetup() {
    const upcomingMeetups = [];
    for (const meetup of this.meetups) {
      if (new Date(meetup.happeningOn) > new Date()) {
        upcomingMeetups.push(meetup);
      }
    }
    return upcomingMeetups;
  }

  postQuestion(meetupId, createdBy, title, body) {
    let registeredMeetup = false;
    for (let i = 0; i < this.meetups.length; i++) {
      if (this.meetups[i].id === meetupId) {
        registeredMeetup = true;
        break;
      }
    }
    if (!registeredMeetup) {
      return {
        status: 404,
        error: 'Sorry! This meetup is not registered'
      };
    }
    let registeredUser = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === Number.parseInt(createdBy, 10)) {
        registeredUser = true;
        break;
      }
    }
    if (!registeredUser) {
      return {
        status: 404,
        error: 'Please, register an account to be able to post a question'
      };
    }

    const currentQuestionsLength = this.questions.length;
    const id = currentQuestionsLength ? this.questions[currentQuestionsLength - 1].id + 1 : 1;
    const newQuestion = new Question(
      id,
      createdBy,
      meetupId,
      title,
      body,
    );
    this.questions.push(newQuestion);
    return newQuestion;
  }

  vote(questionId, action) {
    let votedQuestion;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id === questionId) {
        if (action === 'upvote') {
          this.questions[i].votes += 1;
          votedQuestion = this.questions[i];
          break;
        } else {
          this.questions[i].votes -= 1;
          votedQuestion = this.questions[i];
          break;
        }
      }
    }
    return votedQuestion || null;
  }

  signup(userCredentials) {
    const newId = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    const newUser = new User({
      id: newId,
      firstname: userCredentials.firstname,
      lastname: userCredentials.lastname,
      email: userCredentials.email,
      othername: userCredentials.othername,
      phoneNumber: Number.parseInt(userCredentials.phoneNumber, 10),
      userName: userCredentials.userName,
      isAdmin: false,
    });
    this.users.push(newUser);
    return newUser;
  }

  respondRsvp({ ...rsvpData
  }) {
    const rsvpId = this.rsvps.length ? this.rsvps[this.rsvps.length - 1].id + 1 : 1;
    /**
     * Checking if this meetup exists
     */
    let meetup;
    for (let i = 0; i < this.meetups.length; i++) {
      if (this.meetups[i].id === rsvpData.meetupId) {
        meetup = this.meetups[i];
        break;
      }
    }
    if (!meetup) return {
      status: 404,
      error: 'No matching meetup'
    };
    /**
     * Checking if this user exists
     */
    let userExists = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === rsvpData.userId) {
        userExists = true;
        break;
      }
    }
    if (!userExists) return {
      status: 404,
      error: 'No matching user'
    };
    const newRsvp = new Rsvp(
      rsvpId,
      rsvpData.meetupId,
      rsvpData.userId,
      rsvpData.status,
    );
    return {
      meetupId: newRsvp.meetup,
      meetupTopic: meetup.topic,
      status: newRsvp.status,
    };
  }
}

export default new dataStructure();