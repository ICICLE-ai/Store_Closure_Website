from django.contrib import admin

# Register your models here.
from .models import User
from .models import Query
from .models import QueryStatus

admin.site.register(User)
admin.site.register(Query)
admin.site.register(QueryStatus)