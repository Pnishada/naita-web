# Generated by Django 5.2 on 2025-06-09 05:36

from django.db import migrations

def migrate_existing_data(apps, schema_editor):
    Course = apps.get_model('courses', 'Course')
    
    for course in Course.objects.all():
        # Set default NVQ level (you'll need to decide what makes sense)
        course.nvq_level = 'none'  # Or 'nvq3', 'nvq4' based on your existing data
        
        # Migrate existing duration to non_nvq_duration
        course.non_nvq_duration = course.duration
        course.non_nvq_duration_unit = course.duration_unit
        
        # For free courses, you might need to examine existing fees
        if course.fee == 0:
            course.is_free = True
        
        # Set default training type
        course.training_type = 'both'
        
        course.save()


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0008_remove_courseoffering_center_and_more'),
    ]

    operations = [
        migrations.RunPython(migrate_existing_data),
    ]
