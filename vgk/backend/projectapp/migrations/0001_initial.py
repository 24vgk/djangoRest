# Generated by Django 4.0 on 2022-08-15 08:20

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("userapp", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="ProjectModel",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("git_link", models.URLField(verbose_name="Link to git")),
                ("name", models.CharField(max_length=128, verbose_name="Project name")),
                ("discription", models.TextField(verbose_name="Discription")),
                (
                    "owner",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="project_author",
                        to="userapp.user",
                        verbose_name="Owner",
                    ),
                ),
                (
                    "project_team",
                    models.ManyToManyField(
                        related_name="project_team", to=settings.AUTH_USER_MODEL, verbose_name="Project team"
                    ),
                ),
            ],
            options={
                "verbose_name": "Project",
                "verbose_name_plural": "Projects",
            },
        ),
        migrations.CreateModel(
            name="ToDo_noteModel",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=128, verbose_name="Title")),
                ("discription", models.TextField(verbose_name="Discription")),
                ("is_closed", models.BooleanField(default=False, verbose_name="is_closed")),
                (
                    "owner",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="userapp.user", verbose_name="Owner"
                    ),
                ),
                (
                    "project",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="project_notes",
                        to="projectapp.projectmodel",
                        verbose_name="Project",
                    ),
                ),
            ],
            options={
                "verbose_name": "ToDo note",
                "verbose_name_plural": "ToDo notes",
            },
        ),
    ]