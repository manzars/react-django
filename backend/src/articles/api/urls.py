from django.urls import path, include
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='article')
urlpatterns = router.urls








# from .views import (
#     ArticleDetailView, 
#     ArticleListView,
#     ArticleCreateView,
#     ArticleDeleteView,
#     ArticleUpdateView
# )

# urlpatterns = [
#     path('', ArticleListView.as_view(), name = "Manzar"),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('<pk>/delete/', ArticleDeleteView.as_view()),
#     path('<pk>/update/', ArticleUpdateView.as_view())
# ]
