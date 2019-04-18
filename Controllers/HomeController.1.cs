// using System.Threading;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Http.Features;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.NodeServices;
// using Microsoft.AspNetCore.SpaServices.Prerendering;
// using Microsoft.Extensions.DependencyInjection;

// namespace mvc.Controllers
// {
//     public class HomeController1 : Controller
//     {
//         protected readonly IHostingEnvironment hostEnv;
//         public HomeController1(IHostingEnvironment hostingEnv) => this.hostEnv = hostingEnv;
//         public async Task<IActionResult> Index0()
//         {
//             var prerenderResult = await this.Request.BuildPrerender();

//             this.ViewData["SpaHtml"] = prerenderResult.Html; // our <app-root /> from Angular
//             this.ViewData["Title"] = prerenderResult.Globals["title"]; // set our <title> from Angular
//             this.ViewData["Styles"] = prerenderResult.Globals["styles"]; // put styles in the correct place
//             this.ViewData["Scripts"] = prerenderResult.Globals["scripts"]; // scripts (that were in our header)
//             this.ViewData["Meta"] = prerenderResult.Globals["meta"]; // set our <meta> SEO tags
//             this.ViewData["Links"] = prerenderResult.Globals["links"]; // set our <link rel="canonical"> etc SEO tags
//             this.ViewData["TransferData"] = prerenderResult.Globals["transferData"]; // our transfer data set to window.TRANSFER_CACHE = {};
//             if (!this.hostEnv.IsDevelopment())
//             {
//                 this.ViewData["ServiceWorker"] = "<script>'serviceWorker'in navigator&&navigator.serviceWorker.register('/serviceworker')</script>";
//             }

//             return View();
//         }
//         public async Task<IActionResult> Index()
//         {
//             // var nodeServices = Request.HttpContext.RequestServices.GetRequiredService<INodeServices>();
//             // var hostEnv = Request.HttpContext.RequestServices.GetRequiredService<IHostingEnvironment>();

//             // var applicationBasePath = hostEnv.ContentRootPath;
//             var requestFeature = Request.HttpContext.Features.Get<IHttpRequestFeature>();
//             // var unencodedPathAndQuery = requestFeature.RawTarget;
//             // var unencodedAbsoluteUrl = $"{Request.Scheme}://{Request.Host}{unencodedPathAndQuery}";

//             // By default we're passing down the REQUEST Object (Cookies, Headers, Host) from the Request object here
//             TransferData transferData = new TransferData();
//             transferData.request = AbstractHttpContextRequestInfo(Request); // You can automatically grab things from the REQUEST object in Angular because of this
//             transferData.thisCameFromDotNET = "Hi Angular it's asp.net :)";
//             // Add more customData here, add it to the TransferData class

//             // Prerender / Serialize application (with Universal)

//             RenderToStringResult prerenderResult = await Prerenderer.RenderToString(
//                 applicationBasePath: "/", // baseURL
//                 nodeServices: Request.HttpContext.RequestServices.GetRequiredService<INodeServices>(),
//                 applicationStoppingToken: new CancellationTokenSource().Token,
//                 bootModule: new JavaScriptModuleExport(hostEnv.ContentRootPath + "/dist/server/main"),
//                 requestAbsoluteUrl: $"{Request.Scheme}://{Request.Host}{requestFeature.RawTarget}",
//                 requestPathAndQuery: requestFeature.RawTarget,
//                 // Our Transfer data here will be passed down to Angular (within the main.server file)
//                 // Available there via `params.data.yourData`
//                 customDataParameter: transferData,
//                 timeoutMilliseconds: 30000, // timeout duration
//                 requestPathBase: Request.PathBase.ToString()
//             );

//             // This is where everything is now spliced out, and given to .NET in pieces
//             ViewData["SpaHtml"] = prerenderResult.Html;
//             ViewData["Title"] = prerenderResult.Globals["title"];
//             ViewData["Styles"] = prerenderResult.Globals["styles"];
//             ViewData["Meta"] = prerenderResult.Globals["meta"];
//             ViewData["Links"] = prerenderResult.Globals["links"];
//             ViewData["TransferData"] = prerenderResult.Globals["transferData"]; // our transfer data set to window.TRANSFER_CACHE = {};
//             if (!this.hostEnv.IsDevelopment())
//             {
//                 this.ViewData["ServiceWorker"] = "<script>'serviceWorker'in navigator&&navigator.serviceWorker.register('/serviceworker')</script>";
//             }
//             // Let's render that Home/Index view
//             return View();
//         }

//         private IRequest AbstractHttpContextRequestInfo(HttpRequest request)
//         {

//             IRequest requestSimplified = new IRequest();
//             requestSimplified.cookies = request.Cookies;
//             requestSimplified.headers = request.Headers;
//             requestSimplified.host = request.Host;

//             return requestSimplified;
//         }

//     }

//     public class IRequest
//     {
//         public object cookies { get; set; }
//         public object headers { get; set; }
//         public object host { get; set; }
//     }

//     public class TransferData
//     {
//         // By default we're expecting the REQUEST Object (in the aspnet engine), so leave this one here
//         public dynamic request { get; set; }

//         // Your data here ?
//         public object thisCameFromDotNET { get; set; }
//     }

//     public static class HttpRequestExtensions
//     {
//         public static IRequest AbstractRequestInfo(this HttpRequest request) => new IRequest()
//         {
//             cookies = request.Cookies,
//             headers = request.Headers,
//             host = request.Host
//         };

//         public static async Task<RenderToStringResult> BuildPrerender(this HttpRequest request) =>
//             // Prerender / Serialize application (with Universal)
//             await Prerenderer.RenderToString(
//                 "/",
//                 request.HttpContext.RequestServices.GetRequiredService<INodeServices>(),
//                 new System.Threading.CancellationTokenSource().Token,
//                 new JavaScriptModuleExport(request.HttpContext.RequestServices
//                     .GetRequiredService<IHostingEnvironment>().ContentRootPath + "/dist/server/main"),
//                 $"{request.Scheme}://{request.Host}{request.HttpContext.Features.Get<IHttpRequestFeature>().RawTarget}",
//                 request.HttpContext.Features.Get<IHttpRequestFeature>().RawTarget,
//                 // ** TransferData concept **
//                 // Here we can pass any Custom Data we want !
//                 // By default we're passing down Cookies, Headers, Host from the Request object here
//                 new TransferData
//                 {
//                     request = request.AbstractRequestInfo(),
//                     thisCameFromDotNET = "Hi Angular it's asp.net :)"
//                 }, // Our simplified Request object & any other CustommData you want to send!
//                 30000,
//                 request.PathBase.ToString()
//             );
//     }
// }
