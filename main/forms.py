from django import forms


class LinkForm(forms.Form):
    link = forms.URLField(label="", required=True, widget=forms.URLInput(attrs={"class": "url-input"}))
