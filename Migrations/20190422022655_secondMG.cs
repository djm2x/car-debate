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
                    DateAdvert = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 4, 22, 3, 26, 54, 830, DateTimeKind.Local).AddTicks(4272)),
                    DateSell = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 4, 22, 3, 26, 54, 831, DateTimeKind.Local).AddTicks(9627)),
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
                table: "Roles",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "users" },
                    { 2, "sa" },
                    { 3, "admins" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "Email", "FullName", "IdTypeUser", "ImageUrl", "Password", "Tel" },
                values: new object[] { 1, null, "sa@angular.io", "sa", 0, null, "123", null });

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
