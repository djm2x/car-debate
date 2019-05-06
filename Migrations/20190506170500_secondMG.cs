using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace mvc.Migrations
{
    public partial class secondMG : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Carburants",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carburants", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Transmissions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transmissions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TypeVoitures",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeVoitures", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false),
                    IdTypeUser = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Marques",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: false),
                    IdCountry = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Marques", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Marques_Countries_IdCountry",
                        column: x => x.IdCountry,
                        principalTable: "Countries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserRoles",
                columns: table => new
                {
                    IdUser = table.Column<int>(nullable: false),
                    IdRole = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRoles", x => new { x.IdRole, x.IdUser });
                    table.ForeignKey(
                        name: "FK_UserRoles_Roles_IdRole",
                        column: x => x.IdRole,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserRoles_Users_IdUser",
                        column: x => x.IdUser,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Models",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    IdMarque = table.Column<int>(nullable: false),
                    Annee = table.Column<int>(maxLength: 4, nullable: false),
                    Puissance = table.Column<int>(nullable: false),
                    Reservoir = table.Column<float>(nullable: false),
                    BoiteVitesse = table.Column<int>(nullable: false),
                    FreinageUrgence = table.Column<float>(nullable: false),
                    VitesseMax = table.Column<float>(nullable: false),
                    Poid = table.Column<float>(nullable: false),
                    Prix = table.Column<float>(nullable: false),
                    Autonomie = table.Column<int>(nullable: false),
                    ConsVille = table.Column<float>(nullable: false),
                    ConsRoute = table.Column<float>(nullable: false),
                    ConsAutoroute = table.Column<float>(nullable: false),
                    Cc = table.Column<int>(nullable: false),
                    IdCarburant = table.Column<int>(nullable: false),
                    IdTransmission = table.Column<int>(nullable: false),
                    IdTypeVoiture = table.Column<int>(nullable: false),
                    IdUser = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Models", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Models_Carburants_IdCarburant",
                        column: x => x.IdCarburant,
                        principalTable: "Carburants",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Models_Marques_IdMarque",
                        column: x => x.IdMarque,
                        principalTable: "Marques",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Models_Transmissions_IdTransmission",
                        column: x => x.IdTransmission,
                        principalTable: "Transmissions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Models_TypeVoitures_IdTypeVoiture",
                        column: x => x.IdTypeVoiture,
                        principalTable: "TypeVoitures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Models_Users_IdUser",
                        column: x => x.IdUser,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Adverts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IdUser = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: false),
                    Prix = table.Column<double>(nullable: false),
                    Km = table.Column<double>(nullable: false),
                    IdModel = table.Column<string>(nullable: true),
                    DateAdvert = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 5, 6, 18, 5, 0, 161, DateTimeKind.Local).AddTicks(8391)),
                    DateSell = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 5, 6, 18, 5, 0, 163, DateTimeKind.Local).AddTicks(7539)),
                    AnneModel = table.Column<int>(nullable: false),
                    state = table.Column<bool>(nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adverts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Adverts_Models_IdModel",
                        column: x => x.IdModel,
                        principalTable: "Models",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Adverts_Users_IdUser",
                        column: x => x.IdUser,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ModelImgs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ImageUrl = table.Column<string>(nullable: false),
                    IdModel = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModelImgs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModelImgs_Models_IdModel",
                        column: x => x.IdModel,
                        principalTable: "Models",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AdvertModelImgs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ImageUrl = table.Column<string>(nullable: false),
                    IdAdvert = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdvertModelImgs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdvertModelImgs_Adverts_IdAdvert",
                        column: x => x.IdAdvert,
                        principalTable: "Adverts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Carburants",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "essence" },
                    { 2, "gasoile" }
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "Id", "ImageUrl", "Name" },
                values: new object[,]
                {
                    { 1, @"https://www.picclickimg.com/d/l400/pict/332053619138_/
                                    Drapeau-Flag-vlag-Maroc-Morocco-Marokko-Marocain-Moroccan.jpg", "maroc" },
                    { 2, @"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_of_France_%281794%E2%80%931815%2C
                                    _1830%E2%80%931958%29.svg/250px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg.png", "france" },
                    { 3, "https://i.pinimg.com/originals/1a/46/32/1a4632aa90fd07b3eb59eb0c6b8419f9.jpg", "allemand" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "users" },
                    { 2, "sa" },
                    { 3, "admins" }
                });

            migrationBuilder.InsertData(
                table: "Transmissions",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 4, "t4" },
                    { 3, "t3" },
                    { 1, "t1" },
                    { 2, "t2" }
                });

            migrationBuilder.InsertData(
                table: "TypeVoitures",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 4, "type-4" },
                    { 1, "type-1" },
                    { 2, "type-2" },
                    { 3, "type-3" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Email", "FullName", "IdTypeUser", "ImageUrl", "Password", "Tel" },
                values: new object[] { 1, null, "sa@angular.io", "sa", 0, null, "123", null });

            migrationBuilder.InsertData(
                table: "Marques",
                columns: new[] { "Id", "IdCountry", "ImageUrl", "Name" },
                values: new object[,]
                {
                    { 1, 1, "https://i.pinimg.com/236x/63/7c/fd/637cfd3724d8e5bc3ec9b2550a723d87--peugeot-logo-peugeot-.jpg", "peugeot" },
                    { 2, 1, "https://images-na.ssl-images-amazon.com/images/I/61VaoHj7IbL._SX425_.jpg", "mercedes" },
                    { 3, 2, "https://images-eu.ssl-images-amazon.com/images/I/31vaJEpmCRL._AC_US218_.jpg", "ford" },
                    { 4, 2, "https://images-na.ssl-images-amazon.com/images/I/51v65ntrdXL._SX425_.jpg", "volkswagen" },
                    { 5, 3, "http://www.lorraine-automobiles.fr/wp/wp-content/uploads/2015/07/Renault-kadjar.png", "renault" },
                    { 6, 3, "https://ih0.redbubble.net/image.597289352.5586/raf,360x360,075,t,fafafa:ca443f4786.jpg", "dacia" }
                });

            migrationBuilder.InsertData(
                table: "UserRoles",
                columns: new[] { "IdRole", "IdUser" },
                values: new object[] { 3, 1 });

            migrationBuilder.InsertData(
                table: "Models",
                columns: new[] { "Id", "Annee", "Autonomie", "BoiteVitesse", "Cc", "ConsAutoroute", "ConsRoute", "ConsVille", "FreinageUrgence", "IdCarburant", "IdMarque", "IdTransmission", "IdTypeVoiture", "IdUser", "Poid", "Prix", "Puissance", "Reservoir", "VitesseMax" },
                values: new object[,]
                {
                    { "model1", 2010, 1, 5, 1, 1f, 1f, 1f, 1f, 1, 1, 1, 1, 1, 500f, 10000f, 4, 2f, 180f },
                    { "model2", 2015, 1, 5, 1, 1f, 1f, 1f, 1f, 2, 1, 3, 3, 1, 500f, 12000f, 5, 1f, 190f },
                    { "model3", 2005, 1, 5, 1, 1f, 1f, 1f, 1f, 2, 2, 2, 2, 1, 550f, 15000f, 5, 3f, 200f },
                    { "model4", 1995, 1, 5, 1, 1f, 1f, 1f, 1f, 2, 2, 2, 2, 1, 550f, 15000f, 5, 3f, 150f },
                    { "model5", 2018, 1, 5, 1, 1f, 1f, 1f, 1f, 1, 3, 2, 2, 1, 550f, 20000f, 7, 4f, 250f },
                    { "model6", 2008, 1, 5, 1, 1f, 1f, 1f, 1f, 1, 3, 2, 2, 1, 450f, 18000f, 5, 4f, 250f },
                    { "model7", 2013, 1, 5, 1, 1f, 1f, 1f, 1f, 2, 4, 4, 2, 1, 750f, 28000f, 5, 4f, 280f },
                    { "model8", 2015, 1, 5, 1, 1f, 1f, 1f, 1f, 1, 4, 4, 3, 1, 550f, 22000f, 5, 4f, 200f },
                    { "model9", 2011, 1, 5, 1, 1f, 1f, 1f, 1f, 2, 5, 4, 3, 1, 500f, 18000f, 5, 4f, 200f },
                    { "model10", 2014, 1, 5, 1, 1f, 1f, 1f, 1f, 2, 5, 4, 3, 1, 520f, 21000f, 5, 4f, 230f },
                    { "model11", 2019, 1, 8, 1, 1f, 1f, 1f, 3f, 2, 6, 4, 4, 1, 620f, 40000f, 9, 8f, 400f },
                    { "model12", 2017, 1, 6, 1, 1f, 1f, 1f, 2f, 1, 6, 4, 4, 1, 560f, 32000f, 7, 6f, 300f }
                });

            migrationBuilder.InsertData(
                table: "ModelImgs",
                columns: new[] { "Id", "IdModel", "ImageUrl" },
                values: new object[,]
                {
                    { 1, "model1", "https://media.peugeot.co.uk/image/21/6/carousel-thumbnail-1.415216.6.png?autocrop=1" },
                    { 22, "model11", "https://images.netdirector.co.uk/gforces-auto/image/upload/w_200,h_113,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/06b3f63486340a35d13fb1ef7ebd26af/sandero_2013_exterior_03.jpg" },
                    { 21, "model11", "https://d1ek71enupal89.cloudfront.net/images/blocks_png/DACIA/SANDERO/5DR/17DacSanAmb5drBluFL1_800.jpg" },
                    { 20, "model10", "https://auto.ndtvimg.com/car-images/big/renault/duster/renault-duster.jpg?v=27" },
                    { 19, "model10", "https://auto.ndtvimg.com/car-images/big/renault/captur/renault-captur.jpg?v=19" },
                    { 18, "model9", "https://stimg.cardekho.com/images/carexteriorimages/360x240/Renault/Renault-Scala/047.jpg" },
                    { 17, "model9", "https://api.stoneacremotorgroup.co.uk/sites/default/files/renault-used-cars.png" },
                    { 16, "model8", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK25SOfav7clQLuQNJC8owhle7OoQ_C5hLTGEkrmv9UBJCsma13w" },
                    { 15, "model8", "http://i4.aroq.com/3/2019-01-08-14-03-volkswagenpassatchinesespec_cropped_90.jpg" },
                    { 14, "model7", "https://www.volkswagen.co.uk/files/live/sites/vwuk/files/Used/Used_MLPs/all%20models/more%20images/passat%20estate%202015-present.png" },
                    { 13, "model7", "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/8045.jpg" },
                    { 12, "model6", "https://images.netdirector.co.uk/gforces-auto/image/upload/w_375,h_211,q_auto,c_fill,f_auto,fl_lossy/auto-client/d4e63030c0ae91f4791d72f4d839fb45/w9238618_ecos_cca_titan_34frntpassmtnlghtnngblue_mj.jpg" },
                    { 11, "model6", "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/ford_fusion_ford-fusion_2019-1546985124643.jpg" },
                    { 10, "model5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkmYO36lEpqblJOIbbzK4pQQ9uYaqm7T8GkQDyUMe9SqQ0b3y" },
                    { 9, "model5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zeM9VJvumpJclkUO7YtDPqxtZimAZ4HsmbgfJxp6YTeu81ZK" },
                    { 8, "model4", "https://img.timesnownews.com/media/1537969007-Badshah_Mercedes_GL350.jpg?d=600x450" },
                    { 7, "model4", "https://www.cstatic-images.com/car-pictures/main/USC90MBCCC1A021001.png" },
                    { 6, "model3", "http://cdn.24.co.za/files/Cms/General/d/7694/8698760d7b4c4b0b8802ec459b520882.jpg" },
                    { 5, "model3", "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/mercedes-benz_a-class_mercedes-benz-a-class_2019-1532641693802.jpg" },
                    { 4, "model2", "http://stat.overdrive.in/wp-content/uploads/2017/07/2017-Peugeot-208.jpg" },
                    { 3, "model2", "https://media.peugeot.co.uk/image/52/9/308-cc-past-model.141529.141529.6.jpg?autocrop=1" },
                    { 2, "model1", "https://www.evanshalshaw.com/images/218994/1465584/1465625/all-new-peugeot-3008.jpg?view=Standard" },
                    { 23, "model12", "https://imgix.ranker.com/node_img/1579/31577061/original/dacia-sandero-automobile-models-photo-1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" },
                    { 24, "model12", "https://toomey.imgix.net/used-vehicle-photos/1/EO16HLR-1_20190412.jpg?fit=crop&max-w=480&max-h=320" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AdvertModelImgs_IdAdvert",
                table: "AdvertModelImgs",
                column: "IdAdvert");

            migrationBuilder.CreateIndex(
                name: "IX_Adverts_IdModel",
                table: "Adverts",
                column: "IdModel");

            migrationBuilder.CreateIndex(
                name: "IX_Adverts_IdUser",
                table: "Adverts",
                column: "IdUser");

            migrationBuilder.CreateIndex(
                name: "IX_Marques_IdCountry",
                table: "Marques",
                column: "IdCountry");

            migrationBuilder.CreateIndex(
                name: "IX_ModelImgs_IdModel",
                table: "ModelImgs",
                column: "IdModel");

            migrationBuilder.CreateIndex(
                name: "IX_Models_IdCarburant",
                table: "Models",
                column: "IdCarburant");

            migrationBuilder.CreateIndex(
                name: "IX_Models_IdMarque",
                table: "Models",
                column: "IdMarque");

            migrationBuilder.CreateIndex(
                name: "IX_Models_IdTransmission",
                table: "Models",
                column: "IdTransmission");

            migrationBuilder.CreateIndex(
                name: "IX_Models_IdTypeVoiture",
                table: "Models",
                column: "IdTypeVoiture");

            migrationBuilder.CreateIndex(
                name: "IX_Models_IdUser",
                table: "Models",
                column: "IdUser");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_IdUser",
                table: "UserRoles",
                column: "IdUser");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdvertModelImgs");

            migrationBuilder.DropTable(
                name: "ModelImgs");

            migrationBuilder.DropTable(
                name: "UserRoles");

            migrationBuilder.DropTable(
                name: "Adverts");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "Models");

            migrationBuilder.DropTable(
                name: "Carburants");

            migrationBuilder.DropTable(
                name: "Marques");

            migrationBuilder.DropTable(
                name: "Transmissions");

            migrationBuilder.DropTable(
                name: "TypeVoitures");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Countries");
        }
    }
}
