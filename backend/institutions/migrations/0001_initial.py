# Generated by Django 5.2 on 2025-06-01 09:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InstitutionType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Institution',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('type', models.CharField(choices=[('HEAD', 'Head Office'), ('NATIONAL', 'National Institution'), ('DISTRICT', 'District Office')], max_length=10)),
                ('city', models.CharField(max_length=100)),
                ('address', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('website', models.URLField(blank=True)),
                ('phone1', models.CharField(max_length=15)),
                ('phone2', models.CharField(blank=True, max_length=15)),
                ('google_map_link', models.URLField()),
                ('head_name', models.CharField(max_length=100)),
                ('head_position', models.CharField(max_length=100)),
                ('image', models.ImageField(blank=True, null=True, upload_to='institutions/')),
                ('is_active', models.BooleanField(default=True)),
                ('display_order', models.PositiveIntegerField(default=0)),
                ('institution_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='institutions.institutiontype')),
            ],
            options={
                'ordering': ['display_order'],
            },
        ),
    ]
