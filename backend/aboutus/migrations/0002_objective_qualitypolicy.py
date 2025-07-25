# Generated by Django 5.2 on 2025-05-29 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aboutus', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Objective',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('display_order', models.PositiveIntegerField(default=0)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'ordering': ['display_order'],
            },
        ),
        migrations.CreateModel(
            name='QualityPolicy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('is_active', models.BooleanField(default=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Quality Policy',
            },
        ),
    ]
