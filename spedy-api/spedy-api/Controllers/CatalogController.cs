using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using spedy_api.IServices;
using spedy_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spedy_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        private readonly ICatalogService catalogService;

        public CatalogController(ICatalogService catalog)
        {
            catalogService = catalog;
        }

        [HttpGet]
        [Route("[action]")]
        [Route("api/catalog/getcatalog")]
        public IEnumerable<Catalog> GetCatalog()
        {
            return catalogService.GetCatalog();
        }

        [HttpPost]
        [Route("[action]")]
        [Route("api/catalog/addcatalog")]
        public Catalog AddCatalog(Catalog catalog)
        {
            catalog.Date = DateTime.Now;
            return catalogService.AddCatalog(catalog);
        }
    }
}
