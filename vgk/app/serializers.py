from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users
from .models import Author


class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('first_name', 'last_name', 'birthday_year')


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ('username', 'first_name', 'last_name', 'email')
