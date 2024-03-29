export class Entry {
  private readonly entriesNames: string[];
  constructor(...entriesNames: string[]) {
    this.entriesNames = [...entriesNames]
  }

  get allEntries(): string[] {
    return this.entriesNames;
  }
};

export class Catalog {
  private entries: Entry[] = [];
    
  get entriesArray(): Entry[]{
    return this.entries;
  }

  public add(entry: Entry) {
    // Check the entries property of every Entry object against the receiving entries
    this.entries.forEach((entryObject: Entry) => {
      const existingName = entryObject.allEntries.some(entryName => entry.allEntries.includes(entryName));
      if (existingName) throw new Error('Existing entry name');
    })
    this.entries = [...this.entries, entry]
  }

  public contains(entry: Entry): boolean {
     return this.entries.includes(entry);
  }

  public entryFor(entryName:string): Entry | null {
    let foundEntry = null;
    this.entries.forEach((entryObject: Entry) => {
      if (entryObject.allEntries.includes(entryName)) {
        foundEntry = entryObject;
      }
    })
    return foundEntry;
  }  
};

