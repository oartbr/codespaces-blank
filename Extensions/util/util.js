class Storage{
    /*
     * this object works as a repository for any data
     * it saves the data to the local storage every time a new value is set
     * the idea is to use it as a data management object within other objects
     * this.storage = new Storage(this.jobID, this.jobID); //Define the storage bin
     * this.storage.set(sId, sStatus); //Include content on the bin
     * this.storage.get(sId); //Reads the bin's content with sId
     */
    constructor(sBinID, oOwner){
      this.owner = oOwner;
      this.binID = sBinID;
      this.content = JSON.parse(localStorage.getItem(this.binID)) || {};
      return this;
    }

    load(){
      this.content = JSON.parse(localStorage.getItem(this.binID)) || {};
    }

    save(){
      localStorage.setItem(this.binID, JSON.stringify(this.content));
      this.load();
    }

    get(id){
      return this.content[id];
    }

    set(id, content){
      this.load();
      this.content[id] = content;
      this.save();
    }
  }