import { Entry, Catalog } from './index'

describe("CatalogTest", () => {
    let catalog: Catalog;

    beforeEach(() => {
      catalog = new Catalog();
    })

    it("should contains an added entry", () => {
      const entry = new Entry("fish", "chips")
      catalog.add(entry)

      expect(catalog.contains(entry)).toBe(true);
    })

    it("should indexes entries by name", () => {
      const entry = new Entry("fish", "chips")
      catalog.add(entry)

      expect(catalog.entryFor("chips")).toEqual(entry);
      expect(catalog.entryFor("Missing name")).toBeNull();
    })

    it("should not allow add two entries with the same name", () => {
      catalog.add(new Entry("fish", "chips"));

      expect(() => catalog.add(new Entry("peas","fish"))).toThrow();
    })
})

