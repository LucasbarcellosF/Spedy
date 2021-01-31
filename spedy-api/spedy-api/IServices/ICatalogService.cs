using spedy_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spedy_api.IServices
{
    public interface ICatalogService
    {
        IEnumerable<Catalog> GetCatalog();
        Catalog AddCatalog(Catalog catalog);
    }
}
