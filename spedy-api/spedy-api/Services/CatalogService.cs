using spedy_api.IServices;
using spedy_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spedy_api.Services
{
    public class CatalogService : ICatalogService
    {
        spedyContext dbContext;

        public CatalogService(spedyContext _db)
        {
            dbContext = _db;
        }

        public IEnumerable<Catalog> GetCatalog()
        {
            var catalog = dbContext.Catalog.ToList();
            return catalog;
        }

        public Catalog AddCatalog(Catalog catalog)
        {
            if (catalog != null)
            {
                dbContext.Catalog.Add(catalog);
                dbContext.SaveChanges();
                return catalog;
            }
            return null;
        }

    }
}
