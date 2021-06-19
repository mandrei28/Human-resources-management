﻿// <auto-generated />
using System;
using HRDesk.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HRDesk.Infrastructure.Migrations
{
    [DbContext(typeof(HRDeskDbContext))]
    partial class HRDeskDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.CompanyDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DateOfEmployment")
                        .HasColumnType("date");

                    b.Property<int>("NumberOfDaysoff")
                        .HasColumnType("int");

                    b.Property<int>("Salary")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("CompanyDetails");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            DateOfEmployment = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            NumberOfDaysoff = 20,
                            Salary = 5000
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Dayoff", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("date");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("date");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AdminId");

                    b.HasIndex("UserId");

                    b.ToTable("Daysoff");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Function", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Predefined")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Functions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Management function",
                            Name = "Company manager",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 2,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Board employee",
                            Name = "Board",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 3,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Human resource employee",
                            Name = "Human resource",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 4,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Project manager employee",
                            Name = "Project manager",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 5,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Developer employee",
                            Name = "Developer",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            Id = 6,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Quality assurance employee",
                            Name = "Quality assurance",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.LeaveRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EndHour")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("date");

                    b.Property<DateTime>("StartHour")
                        .HasColumnType("datetime2");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AdminId");

                    b.HasIndex("UserId");

                    b.ToTable("LeaveRequests");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Meeting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("AllDay")
                        .HasColumnType("bit");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<int?>("MeetingRoomId")
                        .HasColumnType("int");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RecurrenceRule")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("TeamId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("MeetingRoomId");

                    b.HasIndex("TeamId");

                    b.ToTable("Meetings");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.MeetingRoom", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<bool>("Predefined")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("MeetingRooms");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Capacity = 5,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Location = "Floor1",
                            Name = "Main Meeting Room",
                            Number = 1,
                            Predefined = true
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.NationalDay", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("date");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("date");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("NationalDays");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Office", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Capacity")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<bool>("Predefined")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Offices");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Capacity = 0,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Location = "First floor",
                            Name = "Management office",
                            Number = 1,
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Permission", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Permissions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Dashboard"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Leave requests"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Daysoff requests"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Reports"
                        },
                        new
                        {
                            Id = 5,
                            Name = "Meetings"
                        },
                        new
                        {
                            Id = 6,
                            Name = "Team"
                        },
                        new
                        {
                            Id = 7,
                            Name = "Holiday calendar"
                        },
                        new
                        {
                            Id = 8,
                            Name = "Book room"
                        },
                        new
                        {
                            Id = 9,
                            Name = "Manage employees"
                        },
                        new
                        {
                            Id = 10,
                            Name = "Manage holidays"
                        },
                        new
                        {
                            Id = 11,
                            Name = "Manage organization"
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.PersonalDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CNP")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CountryOfBirth")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("date");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("PersonalDetails");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Address = "Company address",
                            CNP = "1980528111111",
                            CountryOfBirth = "Romania",
                            DateOfBirth = new DateTime(1998, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "administrator@admin.com",
                            FirstName = "Andrei Cristian",
                            LastName = "Marcu",
                            Phone = "0749206007"
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Predefined")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Teams");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "Management team",
                            Name = "Management team",
                            Predefined = true,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CompanyDetailsId")
                        .HasColumnType("int");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("FunctionId")
                        .HasColumnType("int");

                    b.Property<byte[]>("ImageSrc")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("ImageType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<int?>("OfficeId")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PersonalDetailsId")
                        .HasColumnType("int");

                    b.Property<bool>("Predefined")
                        .HasColumnType("bit");

                    b.Property<int?>("TeamId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("WorkEmail")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CompanyDetailsId");

                    b.HasIndex("FunctionId");

                    b.HasIndex("OfficeId");

                    b.HasIndex("PersonalDetailsId");

                    b.HasIndex("TeamId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CompanyDetailsId = 1,
                            CreatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            FunctionId = 1,
                            IsDeleted = false,
                            OfficeId = 1,
                            Password = "AQAAAAEAACcQAAAAECB47GOoGMZ5MBmFGNmX95ffBJEzfsP/77XSzbcpeS6Oakk3M/CXQ0ul0M2SWn/pzg==",
                            PersonalDetailsId = 1,
                            Predefined = true,
                            TeamId = 1,
                            UpdatedDate = new DateTime(2021, 6, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            WorkEmail = "administrator@company.com"
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.UserPermission", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("PermissionId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PermissionId");

                    b.HasIndex("UserId");

                    b.ToTable("UserPermissions");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 1,
                            UserId = 1
                        },
                        new
                        {
                            Id = 2,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 2,
                            UserId = 1
                        },
                        new
                        {
                            Id = 3,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 3,
                            UserId = 1
                        },
                        new
                        {
                            Id = 4,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 4,
                            UserId = 1
                        },
                        new
                        {
                            Id = 5,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 5,
                            UserId = 1
                        },
                        new
                        {
                            Id = 6,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 6,
                            UserId = 1
                        },
                        new
                        {
                            Id = 7,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 7,
                            UserId = 1
                        },
                        new
                        {
                            Id = 8,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 8,
                            UserId = 1
                        },
                        new
                        {
                            Id = 9,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 9,
                            UserId = 1
                        },
                        new
                        {
                            Id = 10,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 10,
                            UserId = 1
                        },
                        new
                        {
                            Id = 11,
                            CreatedDate = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PermissionId = 11,
                            UserId = 1
                        });
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Dayoff", b =>
                {
                    b.HasOne("HRDesk.Infrastructure.Entities.User", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminId");

                    b.HasOne("HRDesk.Infrastructure.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Admin");

                    b.Navigation("User");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.LeaveRequest", b =>
                {
                    b.HasOne("HRDesk.Infrastructure.Entities.User", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminId");

                    b.HasOne("HRDesk.Infrastructure.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Admin");

                    b.Navigation("User");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.Meeting", b =>
                {
                    b.HasOne("HRDesk.Infrastructure.Entities.MeetingRoom", "MeetingRoom")
                        .WithMany()
                        .HasForeignKey("MeetingRoomId");

                    b.HasOne("HRDesk.Infrastructure.Entities.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId");

                    b.Navigation("MeetingRoom");

                    b.Navigation("Team");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.User", b =>
                {
                    b.HasOne("HRDesk.Infrastructure.Entities.CompanyDetails", "CompanyDetails")
                        .WithMany()
                        .HasForeignKey("CompanyDetailsId");

                    b.HasOne("HRDesk.Infrastructure.Entities.Function", "Function")
                        .WithMany()
                        .HasForeignKey("FunctionId");

                    b.HasOne("HRDesk.Infrastructure.Entities.Office", "Office")
                        .WithMany()
                        .HasForeignKey("OfficeId");

                    b.HasOne("HRDesk.Infrastructure.Entities.PersonalDetails", "PersonalDetails")
                        .WithMany()
                        .HasForeignKey("PersonalDetailsId");

                    b.HasOne("HRDesk.Infrastructure.Entities.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId");

                    b.Navigation("CompanyDetails");

                    b.Navigation("Function");

                    b.Navigation("Office");

                    b.Navigation("PersonalDetails");

                    b.Navigation("Team");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.UserPermission", b =>
                {
                    b.HasOne("HRDesk.Infrastructure.Entities.Permission", "Permission")
                        .WithMany()
                        .HasForeignKey("PermissionId");

                    b.HasOne("HRDesk.Infrastructure.Entities.User", "User")
                        .WithMany("Permissions")
                        .HasForeignKey("UserId");

                    b.Navigation("Permission");

                    b.Navigation("User");
                });

            modelBuilder.Entity("HRDesk.Infrastructure.Entities.User", b =>
                {
                    b.Navigation("Permissions");
                });
#pragma warning restore 612, 618
        }
    }
}
