from django.urls import path,include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'services', views.ServiceView, basename='services')
router.register(r'users', views.UserView, basename='users')

urlpatterns = [
    path('services/', views.ServiceView.as_view({'get':'get', 'post':'post'}), name='service_list'),
    # path('services/<id>', views.ServiceView.as_view(), name='service_list'),
    # path('users/', views.UserView.as_view(), name='user_list'),
    # path('', include(router.urls)),
]
