from rest_framework.viewsets import ModelViewSet
from .models import Users
from .serializers import AuthorModelSerializer


class AuthorModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = AuthorModelSerializer
