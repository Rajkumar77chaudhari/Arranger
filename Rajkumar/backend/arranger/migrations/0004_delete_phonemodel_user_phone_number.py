# Generated by Django 4.0.2 on 2022-02-25 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('arranger', '0003_phonemodel_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PhoneModel',
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
