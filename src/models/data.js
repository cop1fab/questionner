class Meetup {
  constructor({ ...meetupDetails
  }) {
    this.id = meetup.id;
    this.createdOn = new Date();
    this.location = meetupDetails.location;
    this.topic = meetupDetails.topic;
    this.happeningOn = new Date(meetupDetails.happeningOn);
    this.tags = meetupDetails.tags;
  }
}
class User {
  constructor({ ...userDetails
  }) {
    this.id = userDetails.id;
    this.firstname = userDetails.firstname;
    this.lastname = userDetails.lastname;
    this.othername = userDetails.othername || '';
    this.email = userDetails.email;
    this.phoneNumber = userDetails.phoneNumber;
    this.userName = userDetails.userName;
    this.registered = new Date();
    this.isAdmin = userDetails.isAdmin;
  }
}

class Question {
  constructor(
    id,
    createdBy,
    meetup,
    title,
    body,
  ) {
    this.id = id;
    this.createdOn = new Date();
    this.createdBy = createdBy;
    this.meetup = meetup;
    this.title = title;
    this.body = body;
    this.votes = 0;
  }
}

class Rsvp {
  constructor(id, meetupId, userId, status) {
    this.id = id;
    this.meetup = meetupId;
    this.userId = userId;
    this.status = status;
  }
}

export default {
  Meetup,
  User,
  Question,
  Rsvp,
};