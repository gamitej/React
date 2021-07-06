# DEMO

https://quiz-123.netlify.app/


def merge(arr,t,l,m, r):
	c = 0
	i = l 
	j =m 
	k = l 
	while ((i <=m - 1) and (j <= r
)):
		if (arr[i] <= arr[j]):
			t[k] = arr[i]
			k += 1
			i += 1
		else:
			t[k] = arr[j]
			k += 1
			j += 1
			c = c + (mid - i)
	while (i <=m - 1):
		t[k] = arr[i]
		k += 1
		i += 1
	while (j <= r
):
		t[k] = arr[j]
		k += 1
		j += 1
	for i in range(l,r
+1,1):
		arr[i] =t[i]

	return c
def ms(arr,t, l, r):
	c = 0
	if (r > l):
		mid = int((r + l)/2)
		c = ms(arr,t, l,m)
		c += ms(arr,t,m+1, r)
		c += merge(arr,t, l,m+1,r)
	return c
def aps(arr, n):
	t = [0 for i in range(n)]
	return ms(arr,t, 0, n - 1)

if __name__ == '__main__':
	arr = [1, 20, 6, 4, 5]
	n = len(arr)
	print(aps(arr, n))
	