from rest_framework.viewsets import ModelViewSet
from .models import Users
from .models import Author
from .serializers import AuthorModelSerializer
from .serializers import UserModelSerializer


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer

class UserModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserModelSerializer
