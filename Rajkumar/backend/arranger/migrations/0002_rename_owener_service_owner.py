# Generated by Django 4.0.2 on 2022-02-24 06:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('arranger', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='owener',
            new_name='owner',
        ),
    ]
