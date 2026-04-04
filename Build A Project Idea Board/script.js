const projectStatus = {
  PENDING: {
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING; 
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}


class ProjectIdeaBoard{
  constructor(title, ideas){
    this.title = title; 
    this.ideas = [];
  }

  pin(ProjectIdeaInstance){
    this.ideas.push(ProjectIdeaInstance);
  }

  unpin(ProjectIdeaInstance){
    const index = this.ideas.findIndex((item) => {
    return item === ProjectIdeaInstance
    }); 
    this.ideas.splice(index, 1);
  }

  count(){
    return this.ideas.length;
  }

  formatToString() {
  if(this.ideas.length > 0){
    return `${this.title} has ${this.count()} idea(s)\n` + 
    this.ideas.map(({ title, description, status }) => {
      return `${title} (${status.description}) - ${description}`;
    }).join("\n") + `\n`;}
    else{
      return "Empty Board has 0 idea(s)\n"
    }
} 
}
