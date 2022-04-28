import { Entry, Catalog } from './index'

describe("CatalogTest", () => {

    it("should contains an added entry", () => {
      const catalog = new Catalog();
      const entry = new Entry("fish", "chips")
      catalog.add(entry)

      expect(catalog.contains(entry)).toBe(true);
    })

    it("should indexes entries by name", () => {
      const catalog = new Catalog();
      const entry = new Entry("fish", "chips")
      catalog.add(entry)

      expect(catalog.entryFor("chips")).toEqual(entry);
      expect(catalog.entryFor("Missing name")).toBeNull();
    })

})

